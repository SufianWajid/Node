

  INSERT INTO ChatsData
    (id,UserName,UserId,Message,UserAvatar,createdAt,SecondUser)
VALUES
    (@id, @username, @userid, @text, @useravatar, @date,@seconduser);

-- SELECT  [id]
--       ,[UserName]
--       ,[UserId]
--       ,[Message]
--       ,[UserAvatar]
--       ,[createdAt]
--   FROM [ConcilConnectTest].[dbo].[ChatsData]