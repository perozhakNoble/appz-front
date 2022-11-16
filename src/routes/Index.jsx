import { useAuth } from "../hooks/useAuth";

export default function Index() {
  const { user } = useAuth();

  return (
    <p id="zero-state">
      Інформаційно-комунікаційний хаб соціальної адаптації, осіб постраждалих внаслідок війни
      <br />
      {user.firstName + " " + user.lastName}, клікайте на меню ліворуч, для переходів по додатку.
    </p>
  );
}
