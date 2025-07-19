// const [currentStep, setCurrentStep] = useState(() => {
  //   const savedStep = localStorage.getItem("currentStep");
  //   return savedStep ? JSON.parse(savedStep) : 1;
  // });

  // const [userData, setUserData] = useState(() => {
  //   const savedData = localStorage.getItem("userData");
  //   return savedData ? JSON.parse(savedData) : {};
  // });
  // const [finalData, setFinalData] = useState([]);
  // const [success, setSuccess] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setUserData((data) => ({ ...data, [name]: value }));
  // };

  // function handleSubmit() {
  //   setFinalData((finalData) => [...finalData, userData]);
  //   setUserData("");
  //   // setCurrentStep(1)
  //   setSuccess(true);
  // }

  // useEffect(() => {
  //   localStorage.setItem("userData", JSON.stringify(userData));

  //   localStorage.setItem("currentStep", JSON.stringify(currentStep));
  // }, [userData, currentStep]);