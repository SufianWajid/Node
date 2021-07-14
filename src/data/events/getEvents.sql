

Declare @str varchar(max) = @textCode;
Declare @bin varbinary(max);
Declare @binImage varbinary(max);

set @bin= cast(N'' as xml).value('xs:base64Binary(sql:variable("@str"))', 'varbinary(max)');
set @binImage= cast(N'' as xml).value('xs:base64Binary(sql:variable("@picture64"))', 'varbinary(max)');




IF (NOT EXISTS(SELECT *
FROM TestData
WHERE ( Id = @Id  )  )) 
BEGIN
    INSERT INTO TestData
        (Id, Text,CreateDate,User_Name,Audio,Description,Image,Order_Number,Person_Name)
    VALUES
        (@Id, @text, CONVERT(date, @date), @currentUser, @bin, @detail, @binImage, @order, @person_name)
END 
ELSE 
BEGIN
    UPDATE TestData 
SET Text=@text, Audio=@bin,Description=@detail,Image=@binImage,Order_Number=@order,Person_Name =@person_name
WHERE Id = @Id
END 

