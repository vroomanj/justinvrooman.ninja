Recaptcha.configure do |config|
  config.public_key  = ENV["recaptcha_public_key"]
  config.private_key = ENV["recaptcha_private_key"]
  config.use_ssl_by_default = true
  # Uncomment the following line if you are using a proxy server:
  # config.proxy = 'http://myproxy.com.au:8080'
  # Uncomment if you want to use the newer version of the API,
  # only works for versions >= 0.3.7:
  # config.api_version = 'v2'
end