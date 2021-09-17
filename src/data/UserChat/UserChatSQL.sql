SELECT [Id]
      ,[UserName]
      ,[EmailConfirmed]
  FROM [ConcilConnectTest].[dbo].[AspNetUsers]
  WHERE EmailConfirmed=1 AND LOWER(UserName) LIKE '%'+ LOWER(@keyword) + '%';