SELECT  [Id]
      ,[Text]
      ,[Audio]
      ,[User_Name]
      ,[CreateDate]
      ,[Description]
      ,[Image]
      ,[Order_Number]
      ,[Person_Name]


  FROM [ConcilConnectTest].[dbo].[TestData]
  WHERE User_Name = @currentUser AND CONVERT(NVARCHAR(10), CONVERT(date, CreateDate))=CONVERT(NVARCHAR(10), CONVERT(date, @date))
ORDER BY Order_Number ASC
