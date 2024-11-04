import mysql.connector
import pandas as pd
from sklearn.neighbors import NearestNeighbors
from sklearn.preprocessing import MinMaxScaler
from sklearn.neighbors import KNeighborsClassifier

#Database Connection
def connectdb(h,u,p,d):
    database=mysql.connector.connect(
        host= h,
        user=u,
        password=p,
        database=d

    )
    return database

#Data Retreival from MYSQL DB
def getdata():
    #Connection to TUSH database
    tushplatform = connectdb('tushplatform.cx0goikkws0s.us-east-2.rds.amazonaws.com','admin','Software#TU24','tushplatform')

    #Query Student info from Database in preparation for algorithm
    studentinfo = "SELECT idStudents,First_Name,Last_Name,Cleaning_Frequency AS CF,Sleep_Schedule AS SS,Guest AS GU,Noise_Level AS NL,Sleeping_Habits AS SH,Cooking_Eating_Habits AS CEH,Substance_Use AS SU,RentBudget AS RB,Expensesharing AS ES,ConflictResolutionStyle AS CRS,Pets AS P, ROUND(DATEDIFF(CURDATE(),DateofBirth)/365,1) AS A,RoomateSeeking FROM Students;"
    df=pd.read_sql(studentinfo,tushplatform)
    tushplatform.close()
    return df

students=getdata()

#Ordinal Variable Ranking Assignments
students['CF'] = students['CF'].map({'Never':0,'Monthly':1,'Bi-Weekly':2,'Weekly':3,'Daily':4})
students['SS'] = students['SS'].map({'Early Riser':0,'Night Owl':1})
students['GU'] = students['GU'].map({'Few':0,'None':1,'Many':2})
students['NL'] = students['NL'].map({'Quiet':0,'Moderate':1,'Loud':2})
students['SH'] = students['SH'].map({'Light sleeper':0,'Heavy sleeper':1})
students['CEH'] = students['CEH'].map({'Vegan':0,'Vegetarian':1,'Pesicitarian':2,'Flexitarian':3,'Omnivore':4,'Carnivore':5})
students['SU'] = students['SU'].map({'No':0,'Tobacco':1,'Alcohol':2,'Marijuana':3})
students['ES'] = students['ES'].map({'Prefers others to pay':0,'Wont Share':1,'SplitEqually':2})
students['CRS'] = students['CRS'].map({'Calm discussion':0,'Negotiation':1,'Avoidant':2,'Aggressive':3})
students['P'] = students['P'].map({'No':0,'Fish':1,'Reptile':2,'Amphibian':3,'Dog':3,'Cat':3})



#KNN Setup and Scaling to prevent the weighting of variables
XValues = students.drop(['idStudents','First_Name','Last_Name','RoomateSeeking'],axis=1)
Weights=["CF","SS","GU","NL","SH","CEH","SU","RB","ES","CRS","P","A"]
WeightValues=[[1,1,1,1,1,1,1,1,1,1,1,1]]
WeightValuesdf=pd.DataFrame(WeightValues,columns=Weights)

normalize=MinMaxScaler()
normalizedinput= normalize.fit_transform(XValues)
knn = NearestNeighbors(n_neighbors=11, metric='manhattan')
#knn = KNeighborsClassifier(n_neighbors=11,metric='manhattan',weights=[]


normalizedinputdf=pd.DataFrame(normalizedinput, columns=XValues.columns)

WNinput = WeightValuesdf.iloc[0] * normalizedinputdf


#for column in WNinput:
   # NaValues=WNinput[column].isna().sum()
    #print(column,NaValues)

#nan_index = students[students.isna().any(axis=1)].index
#print("Index of rows with NaN values: ", nan_index)

#print("WeightValuesdf shape:", WeightValuesdf.shape)
#print("normalizedinputdf shape:", normalizedinputdf.shape)

knn.fit(WNinput)
currentstudent=1
distances, indices = knn.kneighbors([WNinput.iloc[currentstudent]])
maxd=distances.max()
mind=distances.min()

mindind=distances.argmin()+1
minstuind=indices[0][mindind]

print(f"{students.iloc[currentstudent]['First_Name']} {students.iloc[currentstudent]['Last_Name']} Your potential matches are")
for i, (distance, index) in enumerate(zip(distances[0], indices[0])):
    if index != currentstudent:
        scaledd=(distance-mind)/(maxd-mind)
        cs=round(1/(scaledd +1)*100,2)
        print(f"{students.iloc[index]['First_Name']} {students.iloc[index]['Last_Name']} is {cs}% compatible.")

print(f"Your most compatible match is {students.iloc[minstuind]['First_Name']} {students.iloc[minstuind]['Last_Name']} ")






