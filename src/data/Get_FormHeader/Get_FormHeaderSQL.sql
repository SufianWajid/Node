SELECT [id]
      ,[UserName]
      ,[Naming]
      ,[isActive]
      ,[dateCreated]
      ,[orderNumber]
      ,[SharedID]
      ,[TableSize]
            ,[Hashtag]

  FROM [ConcilConnectTest].[dbo].[FormHeader] WHERE UserName = @user