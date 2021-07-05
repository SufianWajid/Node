SELECT [ID]
      ,[UserName]
      ,[NAMTextTestData]
      ,[CreateDateTestData]
      ,[FormHeaderID]
      ,[FormDetailsDisplayedText]
      ,[Value_CheckBox]
      ,[Value_TextBox]
  FROM [ConcilConnectTest].[dbo].[TestDataDetails]
        WHERE LOWER(UserName)=LOWER(@UserName) AND
 LOWER(NAMTextTestData)=LOWER(@NAMTextTestData)  AND
 CreateDateTestData = CONVERT(datetime, @CreateDateTestData) AND
 FormHeaderID = @FormHeaderID AND
 LOWER(FormDetailsDisplayedText)=LOWER(@FormDetailsDisplayedText)
