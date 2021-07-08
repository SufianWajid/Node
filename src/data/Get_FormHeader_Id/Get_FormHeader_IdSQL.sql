SELECT [ID]
      ,[UserName]
      ,[Naming]
      ,[isActive]
      ,[dateCreated]
      ,[orderNumber] FROM FormHeader
WHERE UserName = @user AND dateCreated = @date