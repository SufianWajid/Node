IF (NOT EXISTS(SELECT *
FROM FormHeader
WHERE CAST(ID AS int)=CAST(@ID AS int)  )) 
BEGIN
    INSERT INTO FormHeader
        (UserName,Naming,isActive,
        dateCreated,orderNumber)
    VALUES
        (@UserName, @Naming, @isActive ,
        CONVERT(datetime, @dateCreated), CAST(@orderNumber AS smallint)
          );

END 
ELSE 
BEGIN
    UPDATE FormHeader 
SET UserName = @UserName,
    Naming = @Naming,
    isActive = @isActive,
    dateCreated = CONVERT(datetime, @dateCreated),
    orderNumber = CAST(@orderNumber AS smallint)

WHERE CAST(ID AS int)=CAST(@ID AS int)
END 


