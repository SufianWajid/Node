

  INSERT INTO ChatsData
    (id,UserName,UserId,Message,UserAvatar,createdAt,SecondUser)
VALUES
    (@id, LOWER(@username), LOWER(@userid), @text, @useravatar, @date,LOWER(@seconduser));

-- SELECT  [id]
--       ,[UserName]
--       ,[UserId]
--       ,[Message]
--       ,[UserAvatar]
--       ,[createdAt]
--   FROM [ConcilConnectTest].[dbo].[ChatsData]