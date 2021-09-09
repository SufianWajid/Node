

  INSERT INTO ChatsData
    (id,UserName,UserId,Message,UserAvatar,createdAt)
VALUES
    (@id, @username, @userid, @text, @useravatar, @date);

-- SELECT  [id]
--       ,[UserName]
--       ,[UserId]
--       ,[Message]
--       ,[UserAvatar]
--       ,[createdAt]
--   FROM [ConcilConnectTest].[dbo].[ChatsData]