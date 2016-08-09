export default function(app) {
  app.post('/auth/lyftAuth', (req, res) => {
    // MAKE REQUEST TO LYFT FOR 4 DIGIT CODE
    let phoneNumber = req.body.phoneNumber;
    console.log('phone number is ', phoneNumber);
    res.json({message: 'on its way'});
  });

  app.post('/auth/lyftCode', (req, res) => {
    let lyftCode = req.body.lyftCode;
    console.log('got code', lyftCode);
    // RETURN 4 digit code
    res.json({message: 'yes!'});
  });
}
