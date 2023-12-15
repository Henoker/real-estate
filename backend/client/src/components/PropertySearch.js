import React from 'react'

const PropertySearch = () => {
  return (
    <div className="col-sm-12">
          <div className="grid-option">
            <form>
              <select className="custom-select">
                <option selected="">All</option>
                <option value={1}>New to Old</option>
                <option value={2}>For Rent</option>
                <option value={3}>For Sale</option>
              </select>
            </form>
          </div>
        </div>
  )
}

export default PropertySearch