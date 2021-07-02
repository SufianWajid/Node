IF (NOT EXISTS(SELECT *
FROM FormDetails
WHERE CAST(ID AS int)=CAST(@ID AS int)  )) 
BEGIN
    INSERT INTO FormDetails
        (UserName,isActive,orderNumber,
        DisplayedText,MakeHiglight,
        HighlightColor,weekEnd,haveUnits,
        UnitsType,isTextbox,DefaultValue,IDFormHeader)
    VALUES
        (@UserName, @isActive, CAST(@orderNumber AS smallint) ,
         @DisplayedText, @MakeHiglight,
          @HighlightColor,@weekEnd,CAST(@haveUnits AS numeric(6, 2)),
          CAST(@UnitsType AS tinyint),@isTextbox,@DefaultValue , CAST(@IDFormHeader AS int)
          );

END 
ELSE 
BEGIN
    UPDATE FormDetails 
SET UserName = @UserName,
    isActive = @isActive,
    orderNumber = CAST(@orderNumber AS smallint),
    DisplayedText= @DisplayedText,
    MakeHiglight = @MakeHiglight,
    HighlightColor = @HighlightColor,
    weekEnd= @weekEnd,
    haveUnits = CAST(@haveUnits AS numeric(6, 2)),
    UnitsType = CAST(@UnitsType AS tinyint),
    isTextbox =@isTextbox ,
    DefaultValue = @DefaultValue ,
    IDFormHeader =CAST(@IDFormHeader AS int)

WHERE CAST(ID AS int)=CAST(@ID AS int)
END 


