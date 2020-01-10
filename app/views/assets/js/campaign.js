// JQUERY MAIN METHOD
$(function() {
  editCampaignModal();
  createCampaignModal();
});


// CREATE CAMPAIGN MODAL
function createCampaignModal() {
  let createCampaignBtn = $(".createCampaignBtn");

  // At click event, do the following.
  createCampaignBtn.click(() => {
    // Empty all inputs
    $(".createCampaign input").val("");

    // Change Modal Title
    $(".createCampaign #createCampaignTitle").text("Create Campaign");

    // Change "modalAlert" content
    $(".createCampaign #modalAlert").html(
      `You're about to create a crowdfunding fund campaign,
      remember you are to grow the campaign to 20,000 GC before it can be
      <span class="text-success">published</span>.`
    );

    // Change Modal Buttons
    $(".createCampaign #createCampaignSumbitBtn").text("Create");

    // Change Modal Form Action
    $(".createCampaign #createCampaignForm").attr("action", "/createCampaign");
  });
}

// EDIT CAMPAIGN MODAL
function editCampaignModal() {
  let editCampaignBtn = $(".editCampaignBtn");

  // At click event, do the following.
  editCampaignBtn.click(() => {
    // Empty all inputs
    $(".createCampaign input").val("");

    // Change Modal Title
    $(".createCampaign #createCampaignTitle").text("Edit Campaign");

    // Change "modalAlert" content
    $(".createCampaign #modalAlert").html(
      `Remember, when this campaign is 
      <span class="text-success">published</span>, 
      you can't edit it!`
    );

    // Change Modal Buttons
    $(".createCampaign #createCampaignSumbitBtn").text("Save Changes");

    // Change Modal Form Action
    $(".createCampaign #createCampaignForm").attr("action", "/editCampaign");
  });
}
