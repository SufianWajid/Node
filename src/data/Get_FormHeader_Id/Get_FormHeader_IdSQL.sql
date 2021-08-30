SELECT [id]
      ,[UserName]
      ,[Naming]
      ,[isActive]
      ,[dateCreated]
      ,[orderNumber]
      ,[SharedID]
      ,[TableSize] FROM FormHeader
WHERE UserName = @user AND dateCreated = @date