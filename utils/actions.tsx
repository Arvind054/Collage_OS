"use server"
import { GoogleGenerativeAI } from "@google/generative-ai";
import { GoogleGenAI } from "@google/genai"; // arvind
// import { ChatGroq } from "@langchain/groq";
// import { InMemoryChatMessageHistory } from "@langchain/core/chat_history";
// import { ChatPromptTemplate } from "@langchain/core/prompts";
// import { RunnableWithMessageHistory } from "@langchain/core/runnables";
// import { HumanMessage } from "@langchain/core/messages";
// import { AIMessage } from "@langchain/core/messages";


/**
 @notice utils folder
 @dev This folder includes all the backend specific code for our application
 @dev We can create different files for backend code for our specific feature
 @notice This method of writing backend code is efficient and easy to understand
 */



// THIS IS THE FUNCTION REQUIRED TO ASK QUESTION TO AI AND GET RESPONSE. 
async function chatResponse(prompt: string) {
  // Access your API key as an environment variable
  const genAI = new GoogleGenerativeAI(process.env.API_KEY); 
  try {
    // Choose a model that's appropriate for your use case.
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); 

    const result = await model.generateContent({
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: prompt,
            }
          ],
        }
      ],
      generationConfig: {
        maxOutputTokens: 1000,
        temperature: 0.1,
      },
    });
    // console.log(result.response.text());
    console.log(result.response.candidates[0].content.parts[0].text);
    return (result.response.candidates[0]);
  }
  catch (error) {
    console.log(error);
  }
};


async function GetResumeATS_Score(ResumeText:any){
  try{
    const ai = new GoogleGenAI({ apiKey: "Your Key Here" });
    const propmt = `This is the text of my prase Reusme \n ${ResumeText}. \n Only provide the Numerical score out of 100 and Nothing Else.`
    const response = await ai.models.generateContent({
      model: "gemini-2.0-flash",
      contents: propmt,
    });
    const answer = `The ATS Score of Your Resume is ${response.text}`
    return answer;
  }catch(e){
    return "Error Getting Your Resume Score, Please Try After Some time";
  }
}







export { chatResponse,GetResumeATS_Score};