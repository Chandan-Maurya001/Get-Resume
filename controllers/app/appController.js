const home = async (req, res, next) => {
  try {
    // console.log(req.user); // user details after login
    return res.render("index", {
      title: "Home | Get-Resume",
      home: "active",
      aboutMe: "",
      blog: "",
      register: "",
      login: "",
      resume: "",
      user: {
        name: req.user?.dataValues?.firstName,
        role: req.user?.dataValues.role,
      },
    });
  } catch (error) {
    next(error);
  }
};

const getResumeForm = (req,res,next) => {
  try {
    return res.render("resume-form", {
      title: "Create-Resume | Get-Resume",
      home: "",
      aboutMe: "",
      blog: "",
      register: "",
      login: "",
      resume:"active",
      user: {
        name: req.user?.dataValues?.firstName,
        role: req.user?.dataValues.role,
      },
    });
  } catch (error) {
    next(error);
  }
}

const createResume = async (req,res,next) => {
  try {
    // get all required fields
    const { 
      firstName,
      middleName,
      lastName,
      contact,
      email,
      address,
      educationList,
      technicalList,
      projectList,
      
    } = req.body;
    // store all files in related tables by using transaction and rollback
    
    // after successful entry in db create pdf(using utility method)
    
    // then send that file  as response or store in temp folder send the valid link of this file as response
  } catch (error) {
    next(error);
  }
}



module.exports = {
  home,
  getResumeForm,
  createResume,
};
