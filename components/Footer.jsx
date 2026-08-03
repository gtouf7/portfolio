import './styles/footer.css'

export default function Footer() {
  return (
    <footer id="footer">
      <span>Georgios Toufexis © {new Date().getFullYear()}</span>
      <span className="footer-mark">{'{ GT_ }'}</span>
    </footer>
  );
}
