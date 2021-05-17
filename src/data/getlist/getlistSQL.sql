SELECT TOP (1000) [Id]
      ,[Text]
      ,[Audio]
      ,[User_Name]
      ,[CreateDate]
      ,[Description]
      ,[Image]
            ,[Order_Number]
                  ,[Person_Name]


  FROM [ConcilConnectTest].[dbo].[TestData]
  WHERE User_Name = @currentUser AND SUBSTRING(CONVERT(NVARCHAR(33),CreateDate , 126)+'Z', 1, 10)=SUBSTRING(CONVERT(NVARCHAR(33),@date , 126)+'Z', 1, 10)
ORDER BY Order_Number ASC
