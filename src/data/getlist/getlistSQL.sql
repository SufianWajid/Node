SELECT TOP (1000) [Id]
      ,[Text]
      ,[Audio]
      ,[User_Name]
      ,[CreateDate]
  FROM [ConcilConnectTest].[dbo].[TestData]
  WHERE User_Name = @currentUser AND SUBSTRING(CreateDate, 1, 10)=SUBSTRING(@date, 1, 10)