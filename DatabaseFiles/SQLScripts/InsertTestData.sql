INSERT INTO Students (
    First_Name, Last_Name, PhoneNumber, UniversityID, RoomateSeeking, 
    Cleaning_Frequency, Daily_Schedule, Guest, Noise_Level, Sleeping_Habits, 
    Cooking_Eating_Habits, Substance_Use, Rent_Budget, Expense_Sharing, 
    Conflict_Resolution_Style, Pets, Date_of_Birth, Street, City, State, Zip, 
    Employed, Employer_Name, Job_Title, Employment_Duration, Monthly_Income, 
    Employer_Contact, Employer_Phone, Employer_Email, Recent_Paystubs, 
    Employment_Verification_Letter, Previous_Landlord_Name, Previous_Landlord_Phone, 
    Previous_Landlord_Email, Is_Driver, Is_Rider
)
VALUES
-- Homer Simpson (The Simpsons)
('Homer', 'Simpson', '555-1234', 'SIM123', 1, 
 'Rarely', 'Night', 'Occasional', 'Loud', 'Sleeps late', 
 'Fast food', 'Yes', '1500', 'Even Split', 
 'Avoidant', 'Dog', '1956-05-12', '742 Evergreen Terrace', 'Springfield', 'IL', '62704', 
 1, 'Springfield Nuclear Plant', 'Safety Inspector', '15 years', 5500, 
 'Charles Montgomery Burns', '555-2345', 'mr.burns@springfieldnuclear.com', NULL, NULL, 
 'Ned Flanders', '555-3456', 'ned@leftorium.com', 'Yes', 'No'),

-- Peter Griffin (Family Guy)
('Peter', 'Griffin', '555-5678', 'GRI456', 1, 
 'Never', 'Night', 'Frequent', 'Very Loud', 'Sleeps late', 
 'Everything', 'Yes', '2000', 'None', 
 'Confrontational', 'Dog', '1966-09-22', '31 Spooner Street', 'Quahog', 'RI', '02904', 
 1, 'Pawtucket Brewery', 'Shipping Clerk', '8 years', 3200, 
 'Angela', '555-6789', 'angela@pawtucketbrewery.com', NULL, NULL, 
 'John Redcorn', '555-7890', 'jredcorn@tribemail.com', 'Yes', 'Yes'),

-- Linda Belcher (Bob's Burgers)
('Linda', 'Belcher', '555-9012', 'BEL789', 1, 
 'Daily', 'Morning', 'Rare', 'Moderate', 'Sleeps early', 
 'Vegetarian', 'No', '1300', 'Negotiable', 
 'Compromising', 'No pets', '1971-06-03', 'Ocean Avenue', 'Seymour’s Bay', 'NJ', '07001', 
 1, 'Bob’s Burgers', 'Co-owner', '10 years', 4000, 
 'Bob Belcher', '555-1111', 'bob@bobsburgers.com', NULL, NULL, 
 'Mr. Frond', '555-2222', 'frond@wagstaffschool.com', 'No', 'Yes'),

-- Cartman (South Park)
('Eric', 'Cartman', '555-3333', 'CAR000', 0, 
 'Never', 'Afternoon', 'Frequent', 'Loud', 'Sleeps late', 
 'Junk food', 'Yes', '1000', 'Not willing to share', 
 'Aggressive', 'No pets', '2001-07-01', '2001 E Main St', 'South Park', 'CO', '80440', 
 0, NULL, NULL, NULL, NULL, 
 NULL, NULL, NULL, NULL, NULL, 
 'Randy Marsh', '555-4444', 'randy@tegridyfarms.com', 'No', 'No'),

-- Lisa Simpson (The Simpsons)
('Lisa', 'Simpson', '555-9876', 'SIM234', 1, 
 'Daily', 'Morning', 'Occasional', 'Quiet', 'Sleeps early', 
 'Vegetarian', 'No', '1200', 'Willing to share', 
 'Collaborative', 'No pets', '2003-05-09', '742 Evergreen Terrace', 'Springfield', 'IL', '62704', 
 0, NULL, NULL, NULL, NULL, 
 NULL, NULL, NULL, NULL, NULL, 
 'Ned Flanders', '555-3456', 'ned@leftorium.com', 'No', 'Yes'),

-- Tina Belcher (Bob's Burgers)
('Tina', 'Belcher', '555-1112', 'BEL101', 1, 
 'Weekly', 'Afternoon', 'Rare', 'Quiet', 'Sleeps early', 
 'Pescatarian', 'No', '800', 'Negotiable', 
 'Avoidant', 'No pets', '2004-02-14', 'Ocean Avenue', 'Seymour’s Bay', 'NJ', '07001', 
 0, NULL, NULL, NULL, NULL, 
 NULL, NULL, NULL, NULL, NULL, 
 'Mr. Frond', '555-2222', 'frond@wagstaffschool.com', 'No', 'Yes'),
 
('Bart', 'Simpson', '555-2222', 'SIM345', 1, 
 'Never', 'Afternoon', 'Frequent', 'Loud', 'Sleeps late', 
 'Junk food', 'Yes', '1000', 'None', 
 'Confrontational', 'Dog', '2000-04-01', '742 Evergreen Terrace', 'Springfield', 'IL', '62704', 
 0, NULL, NULL, NULL, NULL, 
 NULL, NULL, NULL, NULL, NULL, 
 'Ned Flanders', '555-3456', 'ned@leftorium.com', 'No', 'Yes'),

-- Marge Simpson (The Simpsons)
('Marge', 'Simpson', '555-4321', 'SIM456', 1, 
 'Daily', 'Morning', 'Rare', 'Quiet', 'Sleeps early', 
 'Healthy', 'No', '1700', 'Willing to share', 
 'Collaborative', 'No pets', '1956-03-19', '742 Evergreen Terrace', 'Springfield', 'IL', '62704', 
 0, NULL, NULL, NULL, NULL, 
 NULL, NULL, NULL, NULL, NULL, 
 'Ned Flanders', '555-3456', 'ned@leftorium.com', 'Yes', 'No'),

-- Stewie Griffin (Family Guy)
('Stewie', 'Griffin', '555-8765', 'GRI789', 0, 
 'Never', 'Afternoon', 'Frequent', 'Very Loud', 'Sleeps late', 
 'Advanced Cuisine', 'Yes', '1500', 'Not willing to share', 
 'Manipulative', 'No pets', '2010-01-15', '31 Spooner Street', 'Quahog', 'RI', '02904', 
 0, NULL, NULL, NULL, NULL, 
 NULL, NULL, NULL, NULL, NULL, 
 'Lois Griffin', '555-6789', 'lois@griffinfamily.com', 'No', 'Yes'),

-- Meg Griffin (Family Guy)
('Meg', 'Griffin', '555-6543', 'GRI123', 1, 
 'Weekly', 'Morning', 'Occasional', 'Quiet', 'Sleeps early', 
 'Vegetarian', 'No', '900', 'Willing to share', 
 'Collaborative', 'No pets', '1995-11-27', '31 Spooner Street', 'Quahog', 'RI', '02904', 
 0, NULL, NULL, NULL, NULL, 
 NULL, NULL, NULL, NULL, NULL, 
 'Lois Griffin', '555-6789', 'lois@griffinfamily.com', 'No', 'Yes'),

-- Bob Belcher (Bob’s Burgers)
('Bob', 'Belcher', '555-0987', 'BEL001', 1, 
 'Daily', 'Morning', 'Rare', 'Moderate', 'Sleeps early', 
 'Meat Lover', 'No', '1500', 'Willing to share', 
 'Collaborative', 'No pets', '1975-10-15', 'Ocean Avenue', 'Seymour’s Bay', 'NJ', '07001', 
 1, 'Bob’s Burgers', 'Owner', '15 years', 4500, 
 'Linda Belcher', '555-1111', 'linda@bobsburgers.com', NULL, NULL, 
 'Mr. Frond', '555-2222', 'frond@wagstaffschool.com', 'Yes', 'No'),

-- Louise Belcher (Bob’s Burgers)
('Louise', 'Belcher', '555-3333', 'BEL456', 1, 
 'Rarely', 'Afternoon', 'Frequent', 'Loud', 'Sleeps late', 
 'Junk food', 'Yes', '800', 'None', 
 'Confrontational', 'No pets', '2008-03-13', 'Ocean Avenue', 'Seymour’s Bay', 'NJ', '07001', 
 0, NULL, NULL, NULL, NULL, 
 NULL, NULL, NULL, NULL, NULL, 
 'Mr. Frond', '555-2222', 'frond@wagstaffschool.com', 'No', 'Yes'),

-- Stan Marsh (South Park)
('Stan', 'Marsh', '555-5432', 'STM123', 1, 
 'Weekly', 'Morning', 'Occasional', 'Quiet', 'Sleeps early', 
 'Balanced Diet', 'No', '1200', 'Willing to share', 
 'Collaborative', 'Dog', '2001-10-19', '2002 E Main St', 'South Park', 'CO', '80440', 
 0, NULL, NULL, NULL, NULL, 
 NULL, NULL, NULL, NULL, NULL, 
 'Randy Marsh', '555-4444', 'randy@tegridyfarms.com', 'No', 'Yes'),

-- Kyle Broflovski (South Park)
('Kyle', 'Broflovski', '555-9876', 'KBR234', 1, 
 'Daily', 'Morning', 'Rare', 'Quiet', 'Sleeps early', 
 'Vegetarian', 'No', '1300', 'Willing to share', 
 'Collaborative', 'No pets', '2001-05-26', '2003 E Main St', 'South Park', 'CO', '80440', 
 0, NULL, NULL, NULL, NULL, 
 NULL, NULL, NULL, NULL, NULL, 
 'Gerald Broflovski', '555-5555', 'gerald@lawfirm.com', 'No', 'Yes'),

-- Randy Marsh (South Park)
('Randy', 'Marsh', '555-0000', 'RM1234', 1, 
 'Rarely', 'Afternoon', 'Frequent', 'Loud', 'Sleeps late', 
 'Grilling', 'Yes', '1800', 'Willing to share', 
 'Confrontational', 'No pets', '1970-08-18', '2004 E Main St', 'South Park', 'CO', '80440', 
 1, 'Tegridy Farms', 'Owner', '5 years', 6000, 
 'Stan Marsh', '555-4444', 'randy@tegridyfarms.com', NULL, NULL, 
 'Jimbo Kern', '555-6666', 'jimbo@southpark.com', 'Yes', 'No'),

-- Tina Belcher (Bob’s Burgers)
('Tina', 'Belcher', '555-1112', 'BEL101', 1, 
 'Weekly', 'Afternoon', 'Rare', 'Quiet', 'Sleeps early', 
 'Pescatarian', 'No', '800', 'Negotiable', 
 'Avoidant', 'No pets', '2004-02-14', 'Ocean Avenue', 'Seymour’s Bay', 'NJ', '07001', 
 0, NULL, NULL, NULL, NULL, 
 NULL, NULL, NULL, NULL, NULL, 
 'Mr. Frond', '555-2222', 'frond@wagstaffschool.com', 'No', 'Yes');