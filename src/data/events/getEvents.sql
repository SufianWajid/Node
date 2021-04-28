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

Declare @str varchar(max) = @textCode;
Declare @bin varbinary(max);
set @bin= cast(N'' as xml).value('xs:base64Binary(sql:variable("@str"))', 'varbinary(max)');



IF (NOT EXISTS(SELECT *
FROM TestData
WHERE (SUBSTRING
(Text, 1, 4)+SUBSTRING
(Text, 6, 4)+SUBSTRING
(Text, 11, 4)=SUBSTRING
(@text, 1, 4)+SUBSTRING
(@text, 6, 4)+SUBSTRING
(@text, 11, 4) OR Text=@text OR SUBSTRING
(Text, 1, 4)+SUBSTRING
(Text, 6, 4)+SUBSTRING
(Text, 11, 4)=@text OR Text=SUBSTRING
(@text, 1, 4)+SUBSTRING
(@text, 6, 4)+SUBSTRING
(@text, 11, 4)) AND User_Name=@currentUser)) 
BEGIN
    INSERT INTO TestData
        (Text,CreateDate,User_Name,Audio,Description)
    VALUES
        (@text, @date, @currentUser, @bin,@detail)
END 
ELSE 
BEGIN
    UPDATE TestData 
SET  Audio=@bin,Description=@detail
WHERE (SUBSTRING(Text, 1, 4)+SUBSTRING(Text, 6, 4)+SUBSTRING(Text, 11, 4)=SUBSTRING(@text, 1, 4)+SUBSTRING(@text, 6, 4)+SUBSTRING(@text, 11, 4) OR Text=@text OR SUBSTRING(Text, 1, 4)+SUBSTRING(Text, 6, 4)+SUBSTRING(Text, 11, 4)=@text OR Text=SUBSTRING(@text, 1, 4)+SUBSTRING(@text, 6, 4)+SUBSTRING(@text, 11, 4) )AND User_Name=@currentUser
END 

