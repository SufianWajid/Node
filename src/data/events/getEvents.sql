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

declare @source varbinary(max), @encoded varchar(max), @decoded varbinary(max)
set @source = convert(varbinary(max), @textCode)
set @encoded = cast(‘’ as xml).value(‘xs:base64Binary(sql:variable(“@source”))’, ‘varchar(max)’)
set @decoded = cast(‘’ as xml).value(‘xs:base64Binary(sql:variable(“@encoded”))’, ‘varbinary(max)’)


IF (NOT EXISTS(SELECT * FROM TestData WHERE (SUBSTRING(Text, 1, 4)+SUBSTRING(Text, 6, 4)+SUBSTRING(Text, 11, 4)=SUBSTRING(@text, 1, 4)+SUBSTRING(@text, 6, 4)+SUBSTRING(@text, 11, 4) OR Text =@text) AND User_Name=@currentUser)) 
BEGIN 
    INSERT INTO TestData(Text,CreateDate,User_Name,Audio) 
    VALUES (@text,@date,@currentUser,@decoded)
END 
ELSE 
BEGIN 
    UPDATE TestData 
SET CreateDate=@date, Audio=@decoded
WHERE (SUBSTRING(Text, 1, 4)+SUBSTRING(Text, 6, 4)+SUBSTRING(Text, 11, 4)=SUBSTRING(@text, 1, 4)+SUBSTRING(@text, 6, 4)+SUBSTRING(@text, 11, 4) OR Text=@text )AND User_Name=@currentUser
END 