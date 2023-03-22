document
  .getElementById("cement-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    // Prevent page from refreshing on submit

    // Get input values
    let length = parseFloat(document.getElementById("length").value);
    let width = parseFloat(document.getElementById("width").value);
    let thickness = parseFloat(document.getElementById("thickness").value);
    let mixRatio = document.getElementById("mix-ratio").value;

    // Calculate volume of concrete required
    let volume = length * width * thickness;
    // Calculate cement quantity based on selected mix ratio
    let mix = mixRatio.split(":");
    let cement =
      (volume /
        (parseFloat(mix[0]) + parseFloat(mix[1]) + parseFloat(mix[2]))) *
      parseInt(mix[0]);
    let fineagg = cement * parseFloat(mix[1]);
    let coarseagg = cement * parseInt(mix[2]);
    // Display result
    const resultDiv = document.getElementById("result");
    // Create the table as a template literal
    const tableHTML = `
  <table>
    <tr>
      <th>Cement ( in kgs)</th>
      <th>Sand ( in kgs)</th>
      <th>Coarse Aggregate ( in kgs)</th>
    </tr>
    <tr>
      <td>${cement.toFixed(3)}</td>
      <td>${fineagg.toFixed(3)}</td>
      <td>${coarseagg.toFixed(3)}</td>
    </tr>
    <tr>
    Please note that the information provided is an approximate calculation using general methods.
    </tr>
    <br>
  </table>
`;
    // Set the innerHTML of the resultDiv to the tableHTML
    resultDiv.innerHTML = tableHTML;
  });
const resetBtn = document.getElementById("reset-btn");
resetBtn.addEventListener("click", resetInputs);
function resetInputs() {
  $('input[type="number"], textarea').val("");
  result.textContent =
    "Please enter values above and click the Estimate Concrete Quantities button.";
}
