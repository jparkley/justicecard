import { Inertia } from "@inertiajs/inertia"
import React, { useState } from "react"
import Layout from "../../../components/common/layout"

interface Props {}

const AddPage: React.FC<Props> = () => {
  const [state, setState] = useState({
    title: "",
    subtitle: "",
    url: "",
    img_url: "",
    descriptioin: "",
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.currentTarget.name]: event.currentTarget.value,
    })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    Inertia.post("/card/add", state)
  }

  return (
    <Layout>
      <div className="row">
        <div className="col-sm-8">
          <form onSubmit={handleSubmit} className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              name="title"
              className="form-control"
              value={state.title}
              onChange={handleChange}
            />
            <label htmlFor="title">SubTitle</label>
            <input type="text" name="subtitle" className="form-control" />
            <label htmlFor="website">Website</label>
            <input type="text" name="website" className="form-control" />
            <label htmlFor="country">Country</label>
            <input type="text" name="country" className="form-control" />
            <label htmlFor="img_url">Image URL</label>
            <input type="text" name="img_url" className="form-control" />
            <label htmlFor="description">Description</label>
            <input type="text" name="description" className="form-control" />
            <input type="submit" className="form-control" />
          </form>
        </div>
      </div>
    </Layout>
  )
}
export default AddPage
