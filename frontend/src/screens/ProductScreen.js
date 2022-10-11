import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { createReview, detailsProduct } from '../actions/productActions';
import LoadingBox from '../components/LoadingBox';
import MessageBox from '../components/MessageBox';
import Rating from '../components/Rating';
import { PRODUCT_REVIEW_CREATE_RESET } from '../constants/productConstants';

export default function ProductScreen(props) {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;

  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingReviewCreate,
    error: errorReviewCreate,
    success: successReviewCreate,
  } = productReviewCreate;

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  useEffect(() => {
    if (successReviewCreate) {
      window.alert('Komentarz dodany pomyślnie');
      setRating('');
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_CREATE_RESET });
    }
    dispatch(detailsProduct(productId));
  }, [dispatch, productId, successReviewCreate]);


  const submitHandler = (e) => {
    e.preventDefault();
    if (comment && rating) {
      dispatch(
        createReview(productId, { rating, comment, name: userInfo.name })
      );
    } else {
      alert('Oceń oraz zostaw komentarz');
    }
  };
  return (
    <div>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <div>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                src={product.image}
                alt={product.name}
              ></img>
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>
                <li>
                  <p>Cena:</p>
                  {product.price}zł
                </li>
                <li>
                  <p>Opis produktu:</p>
                  {product.description}
                </li>
                <li id='show'>
                  <p>Karta produktu. Dostępne rozmiary i kolory:</p>
                  <a href={product.attachment} target="_blank" rel="noopener noreferrer">Otwórz plik</a>
                  </li>
              </ul>
            </div>
            <div className="col-1">
              <div className="cards cards-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Cena:</div>
                      <div className="price">{product.price}zł</div>
                    </div>
                  </li>
                  <li>
                    <div className="row">
                      <div>Status:</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">W magazynie</span>
                        ) : (
                          <span className="danger">Niedostępny</span>
                        )}
                      </div>
                    </div>
                  </li>
                 
                </ul>
              </div>
            </div>
          </div>
          <div>
            <h2 id="reviews">Opinie</h2>
            {product.reviews.length === 0 && (
              <MessageBox>Brak opini</MessageBox>
            )}

            <table className="table">
              <thead>
                <tr>
                  <th>NAZWA UŻYTKOWNIKA</th>
                  <th>OCENA</th>
                  <th>DATA</th>
                  <td>Komentarz</td>
                </tr>
              </thead>
              <tbody>
                {product.reviews.map((review) => (
                  <tr key={review._id}>
                    <td>{review.name}</td>
                    <td><Rating rating={review.rating} caption=" "></Rating></td>
                    <td>{review.createdAt.substring(0, 10)}</td>
                    <td>{review.comment}</td>
                  </tr>
                ))}</tbody>
            </table>
            <li>
              {userInfo ? (
                <form className="form" onSubmit={submitHandler}>
                  <div>
                    <h2>Napisz opinię o produkcie</h2>
                  </div>
                  <div>
                    <label htmlFor="rating">Ocena</label>
                    <select
                      id="rating"
                      value={rating}
                      onChange={(e) => setRating(e.target.value)}
                    >
                      <option value="">Wybierz...</option>
                      <option value="1">1- Bardzo słaby</option>
                      <option value="2">2- Słaby</option>
                      <option value="3">3- Średni</option>
                      <option value="4">4- Dobry</option>
                      <option value="5">5- Bardzo dobry</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="comment">Komentarz</label>
                    <textarea
                      id="comment"
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                    ></textarea>
                  </div>
                  <div>
                    <label />
                    <button className="primary" type="submit">
                      Dodaj opinię
                    </button>
                  </div>
                  <div>
                    {loadingReviewCreate && <LoadingBox></LoadingBox>}
                    {errorReviewCreate && (
                      <MessageBox variant="danger">
                        {errorReviewCreate}
                      </MessageBox>
                    )}
                  </div>
                </form>
              ) : (
                <MessageBox>
                  Proszę <Link to="/signin">Zaloguj się</Link> aby dodać opinię
                </MessageBox>
              )}
            </li>
          </div>
        </div>
      )}
    </div>
  );
}