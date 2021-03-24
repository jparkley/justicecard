import React, { Component } from "react"
import Inertia from "@inertiajs/inertia"

interface Props {
  cards: Array<any>
}

const CardListPage: React.FC<Props> = ({ cards }) => {
  return (
    <div>
      <ul className="list-group">
        {cards.length > 0 &&
          cards.map((card, index) => {
            return (
              <li className="list-group-item" key={index}>
                <p>{card.title}</p>
              </li>
            )
          })}
      </ul>
    </div>
  )
}

export default CardListPage
