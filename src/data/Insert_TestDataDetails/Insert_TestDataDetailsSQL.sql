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
        (UserName,NAMTextTestData,CreateDateTestData,FormDetailsDisplayedText,Value_CheckBox, Value_TextBox)
    VALUES
        (@UserName, @NAMTextTestData, CONVERT(datetime, @CreateDateTestData) , @FormDetailsDisplayedText, @Value_CheckBox,@Value_TextBox);

END 
ELSE 
BEGIN
    UPDATE TestDataDetails 
SET UserName=@UserName,
NAMTextTestData=@NAMTextTestData,
FormDetailsDisplayedText=@FormDetailsDisplayedText,
Value_CheckBox=@Value_CheckBox,
Value_TextBox=@Value_TextBox


WHERE LOWER(UserName)=LOWER(@UserName) AND
 LOWER(NAMTextTestData)=LOWER(@NAMTextTestData)  AND
 CreateDateTestData = CONVERT(date, @CreateDateTestData) AND
--  FormHeaderID = @FormHeaderID AND
 LOWER(FormDetailsDisplayedText)=LOWER(@FormDetailsDisplayedText)
END 


