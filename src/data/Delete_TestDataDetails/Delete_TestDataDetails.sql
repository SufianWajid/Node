  DELETE FROM TestDataDetails WHERE LOWER(UserName)  = LOWER(@UserName) AND 
  LOWER(NAMTextTestData) = LOWER(NAMTextTestData) AND
  CreateDateTestData = CONVERT(date, @CreateDateTestData) ;