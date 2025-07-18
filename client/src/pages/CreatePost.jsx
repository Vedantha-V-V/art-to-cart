import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

import { preview } from '../assets'
import { getRandomPrompt } from '../utils'
import Loader from '../components/Loader'
import FormField from '../components/FormField'

const CreatePost = () => {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name:'',
    prompt:'',
    photo:''
  })
  const [generatingImg, setGeneratingImg] = useState(false)
  const [loading,setLoading] = useState(false)

  const generateImage = async () =>{
    if(form.prompt){
      try{
        setGeneratingImg(true)
        const response = await fetch('http://localhost:8000/api/v1/dalle',{
          method: 'POST',
          headers: {
            'Content-Type':'application/json'
          },
          body: JSON.stringify({prompt:form.prompt})
        })

        const data = response.json()
        console.log(data)
        setForm({...form,photo:`data:image/jpeg;base64,${data.photo}`})
      }catch(error){
        alert(err)
      }finally{
        setGeneratingImg(false)
      }
    }else{
      alert('Please enter a Prompt')
    }
  }

  const handleSubmit = () =>{

  }

  const handleChange = (e) =>{
    setForm({...form, [e.target.name]: e.target.value })
  }

  const handleSurpriseMe = (e)=>{
    const randomPrompt = getRandomPrompt(form.prompt)
    setForm({...form, prompt: randomPrompt })
  }

  return (
    <section className="max-w-7xl mx-auto">
      <div>
        <h1 className="font-semibold text-[#222328] text-[32px]">Create</h1>
        <p className="mt-2 text-[#666e75] text-[16px] max-w-[500px]">Let Your Imagination Run Wild with DALL-E</p>
      </div>

      <form className='mt-16 max-w-3xl' onSubmit={handleSubmit}>
        <div className="flex flex-col gap-5">
          <FormField
          LabelName="Your Name"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          handleChange={handleChange}
          />
          <FormField
          LabelName="Prompt"
          type="text"
          name="prompt"
          placeholder="Man riding a bicycle"
          value={form.prompt}
          handleChange={handleChange}
          isSurpriseMe
          handleSurpriseMe={handleSurpriseMe}
          />

          <div className="relative bg-gray-50 border-gray-300
          text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500
          w-64 p-3 h-64 flex justify-center items-center">
            {form.photo?(
              <img src={form.photo}
              alt={form.prompt}
              className="w-full h-full object-contain"/>
            ):(
              <img
              src={preview}
              alt="preview"
              className="w-9/12 h-9/12 object-contain opacity-40"/>
            )}

            {/*Rendering the Loader */}
            {generatingImg && (
              <div className="absolute inset-0 z-0 flex justify-center
              items-center bg-[rgba(0,0,0,0.5)] rounded-lg">
                <Loader/>
              </div>
            )}
          </div>

        </div>

        {/*Wrap Submit Button */}
        <div>
          <button type="button" onClick={generateImage}
          className="text-white bg-green-700 font-medium rounded-md text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >{generatingImg ? "Generating...":"Generate"}</button>
        </div>
      </form>
    </section>
  )
}

export default CreatePost
