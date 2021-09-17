

SELECT  [id]
      ,[UserName]
      ,[UserId]
      ,[Message]
      ,[UserAvatar]
      ,[createdAt]
  FROM [ConcilConnectTest].[dbo].[ChatsData]
WHERE (LOWER(UserName)=LOWER(@user) AND LOWER(UserId)=LOWER(@user) AND LOWER(SecondUser)=LOWER(@seconduser)) 
OR (LOWER(UserName)=LOWER(@seconduser) AND LOWER(UserId)=LOWER(@seconduser) AND LOWER(SecondUser)=LOWER(@user))