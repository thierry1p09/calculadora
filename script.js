      <script>
        function somar() {
            const a = parseFloat(document.getElementById("n1").value);
            const b = parseFloat(document.getElementById("n2").value);

            if (
                document.getElementById("n1").value.trim() === "" ||
                document.getElementById("n2").value.trim() === ""
            ) {
                document.getElementById("resultado").innerText =
                    "Digite os dois números!";
                return;
            }

          document.getElementById("resultado").innerText =
                "Resultado: " + (a + b);
        

        function subtrair() {
            const a = parseFloat(document.getElementById("n1").value);
            const b = parseFloat(document.getElementById("n2").value);

            if (
                document.getElementById("n1").value.trim() === "" ||
                document.getElementById("n2").value.trim() === ""
            ) {
                document.getElementById("resultado").innerText =
                    "Digite os dois números!";
                return;
            }

            document.getElementById("resultado").innerText =
                "Resultado: " + (a - b);
        }
    </script>

</body>
</html>