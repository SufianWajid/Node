-- INSERT INTO TestDataDetails
--     (UserName,NAMTextTestData,CreateDateTestData,FormHeaderID,FormDetailsDisplayedText,Value)
-- VALUES
--     (@UserName, @NAMTextTestData, @CreateDateTestData, @FormHeaderID, @FormDetailsDisplayedText, @Value);
IF (NOT EXISTS(SELECT *
FROM TestDataDetails
WHERE LOWER(UserName)=LOWER(@UserName) AND
 LOWER(NAMTextTestData)=LOWER(@NAMTextTestData)  AND
 CreateDateTestData = CONVERT(date, @CreateDateTestData) AND
--  FormHeaderID = @FormHeaderID AND
 LOWER(FormDetailsDisplayedText)=LOWER(@FormDetailsDisplayedText)
 )) 
BEGIN
    INSERT INTO TestDataDetails
        (UserName,NAMTextTestData,CreateDateTestData,FormDetailsDisplayedText,isTextbox,Value_CheckBox, Value_TextBox,FormHeaderNaming)
    VALUES
        (@UserName, @NAMTextTestData, CONVERT(datetime, @CreateDateTestData) , @FormDetailsDisplayedText,@isTextbox, @Value_CheckBox,@Value_TextBox,@FormHeaderNaming);

END 
ELSE 
BEGIN
    UPDATE TestDataDetails 
SET UserName=@UserName,
NAMTextTestData=@NAMTextTestData,
FormDetailsDisplayedText=@FormDetailsDisplayedText,
isTextbox =@isTextbox,
Value_CheckBox=@Value_CheckBox,
Value_TextBox=@Value_TextBox,
FormHeaderNaming = @FormHeaderNaming


WHERE LOWER(UserName)=LOWER(@UserName) AND
 LOWER(NAMTextTestData)=LOWER(@NAMTextTestData)  AND
 CreateDateTestData = CONVERT(date, @CreateDateTestData) AND
--  FormHeaderID = @FormHeaderID AND
 LOWER(FormDetailsDisplayedText)=LOWER(@FormDetailsDisplayedText)
END 


