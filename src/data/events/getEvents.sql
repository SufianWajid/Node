-- INSERT INTO TestData(Text,CreateDate,User_Name)
-- VALUES (@text,@date,@currentUser);

-- IF (NOT EXISTS(SELECT * FROM TestData WHERE Text=@text AND User_Name=@currentUser)) 
-- BEGIN 
--     INSERT INTO TestData(Text,Audio,CreateDate,User_Name) 
--     VALUES (@text,@textCode,@date,@currentUser)
-- END 
-- ELSE 
-- BEGIN 
--     UPDATE TestData 
-- SET CreateDate=@date, Audio=@textCode
-- WHERE Text=@text AND User_Name=@currentUser
-- END 

IF (NOT EXISTS(SELECT * FROM TestData WHERE (SUBSTRING(Text, 1, 4)+SUBSTRING(Text, 6, 4)+SUBSTRING(Text, 11, 4)=SUBSTRING(@text, 1, 4)+SUBSTRING(@text, 6, 4)+SUBSTRING(@text, 11, 4) OR Text =@text) AND User_Name=@currentUser)) 
BEGIN 
    INSERT INTO TestData(Text,CreateDate,User_Name,Audio) 
    VALUES (@text,@date,@currentUser,CONVERT(VARBINARY(25), @textCode, 1))
END 
ELSE 
BEGIN 
    UPDATE TestData 
SET CreateDate=@date, Audio=CONVERT(VARBINARY(25), @textCode, 1)
WHERE (SUBSTRING(Text, 1, 4)+SUBSTRING(Text, 6, 4)+SUBSTRING(Text, 11, 4)=SUBSTRING(@text, 1, 4)+SUBSTRING(@text, 6, 4)+SUBSTRING(@text, 11, 4) OR Text=@text )AND User_Name=@currentUser
END 