SELECT [ID]
      ,[UserName]
      ,[NAMTextTestData]
      ,[CreateDateTestData]
      ,[FormDetailsDisplayedText]
      ,[isTextbox]
      ,[Value_CheckBox]
      ,[Value_TextBox]
      ,[FormHeaderNaming]
  FROM [ConcilConnectTest].[dbo].[TestDataDetails]
        WHERE LOWER(UserName)=LOWER(@UserName) AND
 LOWER(NAMTextTestData)=LOWER(@NAMTextTestData)  AND
 CreateDateTestData = CONVERT(date, @CreateDateTestData) 
--  FormHeaderID = @FormHeaderID AND
--  LOWER(FormDetailsDisplayedText)=LOWER(@FormDetailsDisplayedText)
