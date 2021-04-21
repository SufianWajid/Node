-- INSERT INTO AspNetUsers(Id,UserName,Email,EmailConfirmed,PasswordHash,PhoneNumber,PhoneNumberConfirmed)
-- VALUES (NEWID(),@UserName,@Email,@EmailConfirmed,@PasswordHash,@PhoneNumber,@PhoneNumberConfirmed);


IF (NOT EXISTS(SELECT * FROM AspNetUsers WHERE UserName=@UserName) 
BEGIN 
INSERT INTO AspNetUsers(Id,UserName,Email,EmailConfirmed,PasswordHash,PhoneNumber,PhoneNumberConfirmed)
VALUES (NEWID(),@UserName,@Email,@EmailConfirmed,@PasswordHash,@PhoneNumber,@PhoneNumberConfirmed)
END 
ELSE 
BEGIN 
    UPDATE AspNetUsers 
SET Email=@Email,EmailConfirmed=@EmailConfirmed,PasswordHash=@PasswordHash,PhoneNumber=@PhoneNumber,PhoneNumberConfirmed=@PhoneNumberConfirmed
WHERE UserName=@UserName
END