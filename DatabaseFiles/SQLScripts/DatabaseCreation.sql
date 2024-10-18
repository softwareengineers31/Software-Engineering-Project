-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema tushplatform
-- -----------------------------------------------------
DROP SCHEMA IF EXISTS `tushplatform` ;

-- -----------------------------------------------------
-- Schema tushplatform
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tushplatform` DEFAULT CHARACTER SET utf8 ;
USE `tushplatform` ;

-- -----------------------------------------------------
-- Table `tushplatform`.`Students`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tushplatform`.`Students` ;

CREATE TABLE IF NOT EXISTS `tushplatform`.`Students` (
  `idStudents` INT NOT NULL AUTO_INCREMENT,
  `First_Name` VARCHAR(45) NOT NULL,
  `Last_Name` VARCHAR(45) NOT NULL,
  `PhoneNumber` VARCHAR(45) NOT NULL,
  `UniversityID` VARCHAR(45) NOT NULL,
  `RoomateSeeking` TINYINT NOT NULL,
  `Cleaning_Frequency` VARCHAR(45) NULL,
  `Daily_Schedule` VARCHAR(45) NULL,
  `Guest` VARCHAR(45) NULL,
  `Noise_Level` VARCHAR(45) NULL,
  `Sleeping Habits` VARCHAR(45) NULL,
  `Cooking_Eating_Habits` VARCHAR(45) NULL,
  `Substance_Use` VARCHAR(45) NULL,
  `RentBudget` VARCHAR(45) NULL,
  `Expensesharing` VARCHAR(45) NULL,
  `ConflictResolutionStyle` VARCHAR(45) NULL,
  `Pets` VARCHAR(45) NULL,
  `DateofBirth` DATE NOT NULL,
  `Street` VARCHAR(45) NOT NULL,
  `City` VARCHAR(45) NOT NULL,
  `State` VARCHAR(45) NOT NULL,
  `Zip` INT NOT NULL,
  `Employed` TINYINT NOT NULL,
  `EmployerName` VARCHAR(45) NULL,
  `JobTitle` VARCHAR(45) NULL,
  `EmploymentDuration` VARCHAR(45) NULL,
  `MonthlyIncome` INT NULL,
  `EmployerContact` VARCHAR(45) NULL,
  `EmployerPhone` VARCHAR(45) NULL,
  `EmployerEmail` VARCHAR(45) NULL,
  `RecentPaystubs` LONGBLOB NULL,
  `EmploymentVerificationLetter` LONGBLOB NULL,
  `PreviousLandlordName` VARCHAR(45) NULL,
  `PreviousLandlordPhone` VARCHAR(45) NULL,
  `PreviousLandordEmail` VARCHAR(45) NULL,
  `IsDriver` VARCHAR(45) NULL,
  `IsRider` VARCHAR(45) NULL,
  PRIMARY KEY (`idStudents`),
  UNIQUE INDEX `idStudents_UNIQUE` (`idStudents` ASC) VISIBLE,
  UNIQUE INDEX `UniversityID_UNIQUE` (`UniversityID` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tushplatform`.`Users`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tushplatform`.`Users` ;

CREATE TABLE IF NOT EXISTS `tushplatform`.`Users` (
  `idUsers` INT NOT NULL AUTO_INCREMENT,
  `Username` VARCHAR(45) NOT NULL,
  `Passwordhash` VARCHAR(45) NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `Phone` VARCHAR(45) NOT NULL,
  `IsActive` TINYINT NOT NULL,
  `Students_idStudents` INT NOT NULL,
  PRIMARY KEY (`idUsers`, `Students_idStudents`),
  UNIQUE INDEX `Username_UNIQUE` (`Username` ASC) VISIBLE,
  INDEX `fk_Users_Students1_idx` (`Students_idStudents` ASC) VISIBLE,
  CONSTRAINT `fk_Users_Students1`
    FOREIGN KEY (`Students_idStudents`)
    REFERENCES `tushplatform`.`Students` (`idStudents`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tushplatform`.`Landlord`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tushplatform`.`Landlord` ;

CREATE TABLE IF NOT EXISTS `tushplatform`.`Landlord` (
  `idLandlord` INT NOT NULL AUTO_INCREMENT,
  `First_Name` VARCHAR(45) NOT NULL,
  `Last_Name` VARCHAR(45) NOT NULL,
  `PhoneNumber` VARCHAR(45) NOT NULL,
  `Verified Status` VARCHAR(45) NOT NULL,
  `Uploaded Documents` LONGBLOB NOT NULL,
  `Users_idUsers` INT NOT NULL,
  PRIMARY KEY (`idLandlord`, `Users_idUsers`),
  UNIQUE INDEX `idLandlord_UNIQUE` (`idLandlord` ASC) VISIBLE,
  INDEX `fk_Landlord_Users1_idx` (`Users_idUsers` ASC) VISIBLE,
  CONSTRAINT `fk_Landlord_Users1`
    FOREIGN KEY (`Users_idUsers`)
    REFERENCES `tushplatform`.`Users` (`idUsers`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tushplatform`.`Listings`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tushplatform`.`Listings` ;

CREATE TABLE IF NOT EXISTS `tushplatform`.`Listings` (
  `idListings` INT NOT NULL AUTO_INCREMENT,
  `Street` VARCHAR(45) NOT NULL,
  `City` VARCHAR(45) NOT NULL,
  `ZipCode` INT NOT NULL,
  `State` VARCHAR(45) NOT NULL,
  `Property Type` VARCHAR(45) NOT NULL,
  `AirConditioning` TINYINT NOT NULL,
  `Heat` TINYINT NOT NULL,
  `In-Unit Laundry` TINYINT NOT NULL,
  `PreFurnished` TINYINT NOT NULL,
  `BalconyPatio` TINYINT NOT NULL,
  `HighSpeedInternetAccess` TINYINT NOT NULL,
  `ModernAppliances` TINYINT NOT NULL,
  `FitnessCenterGym` TINYINT NOT NULL,
  `SwimmingPool` TINYINT NOT NULL,
  `PetFriendly` TINYINT NOT NULL,
  `Parking` VARCHAR(45) NOT NULL,
  `AdditionalAmenities` MULTILINESTRING NULL,
  `NumBedrooms` INT NOT NULL,
  `NumBathrooms` INT NOT NULL,
  `AvailabilityDate` DATE NOT NULL,
  `IsActive` TINYINT NOT NULL,
  `Landlord_idLandlord` INT NOT NULL,
  PRIMARY KEY (`idListings`, `Landlord_idLandlord`),
  UNIQUE INDEX `idListings_UNIQUE` (`idListings` ASC) VISIBLE,
  INDEX `fk_Listings_Landlord_idx` (`Landlord_idLandlord` ASC) VISIBLE,
  CONSTRAINT `fk_Listings_Landlord`
    FOREIGN KEY (`Landlord_idLandlord`)
    REFERENCES `tushplatform`.`Landlord` (`idLandlord`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tushplatform`.`Applications`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tushplatform`.`Applications` ;

CREATE TABLE IF NOT EXISTS `tushplatform`.`Applications` (
  `idApplications` INT NOT NULL AUTO_INCREMENT,
  `ApplicationDate` DATE NOT NULL,
  `Status` VARCHAR(45) NOT NULL,
  `Listings_idListings` INT NOT NULL,
  `Listings_Landlord_idLandlord` INT NOT NULL,
  `Students_idStudents` INT NOT NULL,
  PRIMARY KEY (`idApplications`, `Listings_idListings`, `Listings_Landlord_idLandlord`, `Students_idStudents`),
  UNIQUE INDEX `idApplications_UNIQUE` (`idApplications` ASC) VISIBLE,
  INDEX `fk_Applications_Listings1_idx` (`Listings_idListings` ASC, `Listings_Landlord_idLandlord` ASC) VISIBLE,
  INDEX `fk_Applications_Students1_idx` (`Students_idStudents` ASC) VISIBLE,
  CONSTRAINT `fk_Applications_Listings1`
    FOREIGN KEY (`Listings_idListings` , `Listings_Landlord_idLandlord`)
    REFERENCES `tushplatform`.`Listings` (`idListings` , `Landlord_idLandlord`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Applications_Students1`
    FOREIGN KEY (`Students_idStudents`)
    REFERENCES `tushplatform`.`Students` (`idStudents`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tushplatform`.`RoommateMatches`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tushplatform`.`RoommateMatches` ;

CREATE TABLE IF NOT EXISTS `tushplatform`.`RoommateMatches` (
  `idRoommateMatches` INT NOT NULL AUTO_INCREMENT,
  `MatchScore` DECIMAL(5,2) NULL,
  PRIMARY KEY (`idRoommateMatches`),
  UNIQUE INDEX `idRoommateMatches_UNIQUE` (`idRoommateMatches` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tushplatform`.`Vehicles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tushplatform`.`Vehicles` ;

CREATE TABLE IF NOT EXISTS `tushplatform`.`Vehicles` (
  `idVehicles` INT NOT NULL AUTO_INCREMENT,
  `Make` VARCHAR(45) NOT NULL,
  `Model` VARCHAR(45) NOT NULL,
  `LNUM` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idVehicles`),
  UNIQUE INDEX `idVehicles_UNIQUE` (`idVehicles` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tushplatform`.`CarPoolRides`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tushplatform`.`CarPoolRides` ;

CREATE TABLE IF NOT EXISTS `tushplatform`.`CarPoolRides` (
  `idCarPoolRides` INT NOT NULL AUTO_INCREMENT,
  `FreePaid` VARCHAR(45) NOT NULL,
  `Price` INT NOT NULL,
  `DepartTime` DATETIME NOT NULL,
  `ArrivalTime` DATETIME NOT NULL,
  `DepartLocation` VARCHAR(45) NOT NULL,
  `ArrivalLocation` VARCHAR(45) NOT NULL,
  `Vehicles_idVehicles` INT NOT NULL,
  PRIMARY KEY (`idCarPoolRides`, `Vehicles_idVehicles`),
  INDEX `fk_CarPoolRides_Vehicles1_idx` (`Vehicles_idVehicles` ASC) VISIBLE,
  CONSTRAINT `fk_CarPoolRides_Vehicles1`
    FOREIGN KEY (`Vehicles_idVehicles`)
    REFERENCES `tushplatform`.`Vehicles` (`idVehicles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tushplatform`.`Students_has_Vehicles`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tushplatform`.`Students_has_Vehicles` ;

CREATE TABLE IF NOT EXISTS `tushplatform`.`Students_has_Vehicles` (
  `Students_idStudents` INT NOT NULL,
  `Vehicles_idVehicles` INT NOT NULL,
  PRIMARY KEY (`Students_idStudents`, `Vehicles_idVehicles`),
  INDEX `fk_Students_has_Vehicles_Vehicles1_idx` (`Vehicles_idVehicles` ASC) VISIBLE,
  INDEX `fk_Students_has_Vehicles_Students1_idx` (`Students_idStudents` ASC) VISIBLE,
  CONSTRAINT `fk_Students_has_Vehicles_Students1`
    FOREIGN KEY (`Students_idStudents`)
    REFERENCES `tushplatform`.`Students` (`idStudents`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Students_has_Vehicles_Vehicles1`
    FOREIGN KEY (`Vehicles_idVehicles`)
    REFERENCES `tushplatform`.`Vehicles` (`idVehicles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tushplatform`.`RoommateMatches_has_Students`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tushplatform`.`RoommateMatches_has_Students` ;

CREATE TABLE IF NOT EXISTS `tushplatform`.`RoommateMatches_has_Students` (
  `RoommateMatches_idRoommateMatches` INT NOT NULL,
  `Students_idStudents` INT NOT NULL,
  PRIMARY KEY (`RoommateMatches_idRoommateMatches`, `Students_idStudents`),
  INDEX `fk_RoommateMatches_has_Students_Students1_idx` (`Students_idStudents` ASC) VISIBLE,
  INDEX `fk_RoommateMatches_has_Students_RoommateMatches1_idx` (`RoommateMatches_idRoommateMatches` ASC) VISIBLE,
  CONSTRAINT `fk_RoommateMatches_has_Students_RoommateMatches1`
    FOREIGN KEY (`RoommateMatches_idRoommateMatches`)
    REFERENCES `tushplatform`.`RoommateMatches` (`idRoommateMatches`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_RoommateMatches_has_Students_Students1`
    FOREIGN KEY (`Students_idStudents`)
    REFERENCES `tushplatform`.`Students` (`idStudents`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tushplatform`.`Students_has_CarPoolRides`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tushplatform`.`Students_has_CarPoolRides` ;

CREATE TABLE IF NOT EXISTS `tushplatform`.`Students_has_CarPoolRides` (
  `Students_idStudents` INT NOT NULL AUTO_INCREMENT,
  `CarPoolRides_idCarPoolRides` INT NOT NULL,
  `CarPoolRides_Vehicles_idVehicles` INT NOT NULL,
  PRIMARY KEY (`Students_idStudents`, `CarPoolRides_idCarPoolRides`, `CarPoolRides_Vehicles_idVehicles`),
  INDEX `fk_Students_has_CarPoolRides_CarPoolRides1_idx` (`CarPoolRides_idCarPoolRides` ASC, `CarPoolRides_Vehicles_idVehicles` ASC) VISIBLE,
  INDEX `fk_Students_has_CarPoolRides_Students1_idx` (`Students_idStudents` ASC) VISIBLE,
  CONSTRAINT `fk_Students_has_CarPoolRides_Students1`
    FOREIGN KEY (`Students_idStudents`)
    REFERENCES `tushplatform`.`Students` (`idStudents`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Students_has_CarPoolRides_CarPoolRides1`
    FOREIGN KEY (`CarPoolRides_idCarPoolRides` , `CarPoolRides_Vehicles_idVehicles`)
    REFERENCES `tushplatform`.`CarPoolRides` (`idCarPoolRides` , `Vehicles_idVehicles`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tushplatform`.`ListingImages`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tushplatform`.`ListingImages` ;

CREATE TABLE IF NOT EXISTS `tushplatform`.`ListingImages` (
  `idListingImages` INT NOT NULL AUTO_INCREMENT,
  `image` BLOB NOT NULL,
  `Description` MULTILINESTRING NOT NULL,
  `UploadedBy` VARCHAR(45) NOT NULL,
  `Listings_idListings` INT NOT NULL,
  `Listings_Landlord_idLandlord` INT NOT NULL,
  PRIMARY KEY (`idListingImages`, `Listings_idListings`, `Listings_Landlord_idLandlord`),
  INDEX `fk_ListingImages_Listings1_idx` (`Listings_idListings` ASC, `Listings_Landlord_idLandlord` ASC) VISIBLE,
  CONSTRAINT `fk_ListingImages_Listings1`
    FOREIGN KEY (`Listings_idListings` , `Listings_Landlord_idLandlord`)
    REFERENCES `tushplatform`.`Listings` (`idListings` , `Landlord_idLandlord`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tushplatform`.`StudentImages`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `tushplatform`.`StudentImages` ;

CREATE TABLE IF NOT EXISTS `tushplatform`.`StudentImages` (
  `idStudentImages` INT NOT NULL AUTO_INCREMENT,
  `image` LONGBLOB NOT NULL,
  `Description` MULTILINESTRING NOT NULL,
  `UpdatedBy` VARCHAR(45) NOT NULL,
  `Landlord_idLandlord` INT NOT NULL,
  PRIMARY KEY (`idStudentImages`, `Landlord_idLandlord`),
  INDEX `fk_StudentImages_Landlord1_idx` (`Landlord_idLandlord` ASC) VISIBLE,
  CONSTRAINT `fk_StudentImages_Landlord1`
    FOREIGN KEY (`Landlord_idLandlord`)
    REFERENCES `tushplatform`.`Landlord` (`idLandlord`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
