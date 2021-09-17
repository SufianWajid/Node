

SELECT  [id]
      ,[UserName]
      ,[UserId]
      ,[Message]
      ,[UserAvatar]
      ,[createdAt]
  FROM [ConcilConnectTest].[dbo].[ChatsData]
WHERE LOWER(UserName)=LOWER(@user) AND LOWER(UserId)=LOWER(@user) AND LOWER(SecondUser)=LOWER(@seconduser)