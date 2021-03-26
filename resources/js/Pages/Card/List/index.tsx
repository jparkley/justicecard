import React, { Component } from "react"
import Inertia from "@inertiajs/inertia"
import Layout from "../../../components/common/layout"

interface Props {
  cards: Array<any>
}

const CardListPage: React.FC<Props> = ({ cards }) => {
  return (
    <Layout>
      <div className="row">
        {cards.length > 0 &&
          cards.map((card, index) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12" key={index}>
                <div className="card">
                  <div className="card-body">
                    <img
                      className="card-img-top img-fluid"
                      src={card.img_url}
                      alt=""
                    />
                    <div className="card-block">
                      <h4 className="card-title">{card.title}</h4>
                      <h4 className="card-title">{card.country}</h4>
                      <p className="card-text">{card.subtitle}</p>
                      <p className="card-text">{card.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
      </div>
    </Layout>
  )
}

export default CardListPage
