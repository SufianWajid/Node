INSERT INTO AspNetUsers(Id,UserName,Email,EmailConfirmed,PasswordHash,PhoneNumber,PhoneNumberConfirmed)
VALUES (NEWID(),@UserName,@Email,@EmailConfirmed,@PasswordHash,@PhoneNumber,@PhoneNumberConfirmed);