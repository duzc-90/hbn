CREATE TABLE `hbn`.`hbn_apply` (
`applyId` INT NOT NULL ,
`name` VARCHAR(64) NOT NULL ,
`tel` VARCHAR(16) NOT NULL ,
`gender` TINYINT NOT NULL ,
`borth` INT NOT NULL ,
`position` VARCHAR(128) NOT NULL ,
`email` VARCHAR(64) NOT NULL ,
`applyTime` INT NOT NULL ,
PRIMARY KEY (`applyId`)) ENGINE = InnoDB;
