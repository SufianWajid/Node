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
Declare @binImage varbinary(max);

set @bin= cast(N'' as xml).value('xs:base64Binary(sql:variable("@str"))', 'varbinary(max)');
set @binImage= cast(N'' as xml).value('xs:base64Binary(sql:variable("@picture64"))', 'varbinary(max)');




IF (NOT EXISTS(SELECT *
FROM TestData
WHERE (SUBSTRING
(Text, 1, 4)+SUBSTRING
(Text, 6, 4)+SUBSTRING
(Text, 11, 4)=SUBSTRING
(@old, 1, 4)+SUBSTRING
(@old, 6, 4)+SUBSTRING
(@old, 11, 4) OR Text=@old OR SUBSTRING
(Text, 1, 4)+SUBSTRING
(Text, 6, 4)+SUBSTRING
(Text, 11, 4)=@old OR Text=SUBSTRING
(@old, 1, 4)+SUBSTRING
(@old, 6, 4)+SUBSTRING
(@old, 11, 4)) AND User_Name=@currentUser)) 
BEGIN
    INSERT INTO TestData
        (Text,CreateDate,User_Name,Audio,Description,Image)
    VALUES
        (@text, @date, @currentUser, @bin,@detail,@binImage)
END 
ELSE 
BEGIN
    UPDATE TestData 
SET Text=@text, Audio=@bin,Description=@detail,Image=@binImage
WHERE (SUBSTRING(Text, 1, 4)+SUBSTRING(Text, 6, 4)+SUBSTRING(Text, 11, 4)=SUBSTRING(@old, 1, 4)+SUBSTRING(@old, 6, 4)+SUBSTRING(@old, 11, 4) OR Text=@old OR SUBSTRING(Text, 1, 4)+SUBSTRING(Text, 6, 4)+SUBSTRING(Text, 11, 4)=@old OR Text=SUBSTRING(@old, 1, 4)+SUBSTRING(@old, 6, 4)+SUBSTRING(@old, 11, 4) )AND User_Name=@currentUser
END 

