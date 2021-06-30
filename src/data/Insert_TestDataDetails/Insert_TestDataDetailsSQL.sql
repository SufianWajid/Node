-- INSERT INTO TestDataDetails
--     (UserName,NAMTextTestData,CreateDateTestData,FormHeaderID,FormDetailsDisplayedText,Value)
-- VALUES
--     (@UserName, @NAMTextTestData, @CreateDateTestData, @FormHeaderID, @FormDetailsDisplayedText, @Value);
IF (NOT EXISTS(SELECT *
FROM TestDataDetails
WHERE CAST(ID AS int)=CAST(@ID AS int)  )) 
BEGIN
    INSERT INTO TestDataDetails
        (UserName,NAMTextTestData,CreateDateTestData,FormHeaderID,FormDetailsDisplayedText,Value)
    VALUES
        (@UserName, @NAMTextTestData, CONVERT(datetime, @CreateDateTestData) , @FormHeaderID, @FormDetailsDisplayedText, @Value);

END 
ELSE 
BEGIN
    UPDATE TestDataDetails 
SET UserName=@UserName,
NAMTextTestData=@NAMTextTestData,
FormHeaderID=@FormHeaderID,
FormDetailsDisplayedText=@FormDetailsDisplayedText,
Value=@Value

WHERE CAST(ID AS int)=CAST(@ID AS int)
END 


