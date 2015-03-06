json.array!(@pages) do |page|
  json.extract! page, :id, :title, :author, :content
  json.url page_url(page, format: :json)
end
