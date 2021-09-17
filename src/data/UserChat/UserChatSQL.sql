SELECT [Id]
      ,[UserName]
      ,[EmailConfirmed]
  FROM [ConcilConnectTest].[dbo].[AspNetUsers]
  WHERE LOWER(UserName)!=LOWER(@user) AND EmailConfirmed=1 AND LOWER(UserName) LIKE '%'+ LOWER(@keyword) + '%';