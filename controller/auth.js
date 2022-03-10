const {loginSchema,registerSchema} = require('../helper/validationSchema')

exports.login = async (req, res) => {
  try {
      console.log(req.body);
      const result = await loginSchema.validateAsync(req.body)
      console.log("=========",result);
  } catch (err) {
    res.status(400).json({
      success: false,
      message: err.message,
    });
  }
};
exports.register = async (req, res) => {
    try {
        
        const result = await registerSchema.validateAsync(req.body)
        // console.log("=========",result);
        result.create_dt = JSON.stringify(result.create_dt)
        res.send(result)
    } catch (err) {
        console.log(err);
      res.status(400).json({
        success: false,
        message: err.message,
      });
    }
  };
  