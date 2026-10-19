   <script>
        function somar() {
            let a = Number(document.getElementById("n1").value);
            let b = Number(document.getElementById("n2").value);

            document.getElementById("resultado").innerText =
                "Resultado: " + (a + b);
        }

        function subtrair() {
            let a = Number(document.getElementById("n1").value);
            let b = Number(document.getElementById("n2").value);

            document.getElementById("resultado").innerText =
                "Resultado: " + (a - b);
        }
    </script>

</body>
</html>
    