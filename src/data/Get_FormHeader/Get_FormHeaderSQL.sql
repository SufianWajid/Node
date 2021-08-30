SELECT [id]
      ,[UserName]
      ,[Naming]
      ,[isActive]
      ,[dateCreated]
      ,[orderNumber]
      ,[SharedID]
      ,[TableSize]
  FROM [ConcilConnectTest].[dbo].[FormHeader] WHERE UserName = @user