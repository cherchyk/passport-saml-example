module.exports = {
	development : {
		app : {
			name : 'Passport SAML strategy example',
			port : process.env.PORT || 3000
		},
		passport: {
			strategy : 'saml',
			saml : {
				path : '/login/callback',
				entryPoint : 'https://idp.itlab.stanford.edu/idp/profile/SAML2/Redirect/SSO',
				issuer : 'passport-saml',
        cert: 'MIIDQzCCAiugAwIBAgIUKuSXppluIJvYiroHZCb9QRi6uh0wDQYJKoZIhvcNAQEF BQAwITEfMB0GA1UEAxMWaWRwLml0bGFiLnN0YW5mb3JkLmVkdTAeFw0xMzA3MTAx NzU3MzhaFw0xNjA3MTAxNzU3MzhaMCExHzAdBgNVBAMTFmlkcC5pdGxhYi5zdGFu Zm9yZC5lZHUwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCz67jrUj+n q3NemgxSbA4uOz9cLaZToM3uED7xy/vyFlbv8Od9i55NQSrjdDufRI/TmTI52IkI X89wyeBspyP4jOy4y3EvQtFtVlXhHiTEdsvDn87E6esl3ouhR5nUY5zH7GwJp9zp Jr3D56JGR2QpVtFbSFZbIMa6uhb9ToYNsByJeFasLWojcn1ycUrj8p8ZFk1aZio7 VhJlPVdokJAhlqhlnkkZGIJHpgId0EOVrSfUNU8BdFJHlUkpvsJB3WViibLe9a5w clDVMpkMA+gapfx3Zp0ytEIIG1qv0eQe9oAb45IUYatT0JYGzgTU4pClGwimQTVm NI0dvafvyqBjAgMBAAGjczBxMFAGA1UdEQRJMEeCFmlkcC5pdGxhYi5zdGFuZm9y ZC5lZHWGLWh0dHBzOi8vaWRwLml0bGFiLnN0YW5mb3JkLmVkdS9pZHAvc2hpYmJv bGV0aDAdBgNVHQ4EFgQU9PDx6le/7k8fXsH3Qp3uaam/Jd8wDQYJKoZIhvcNAQEF BQADggEBAKpsyW92XzEVgNwdapcejQTjF0Ccp0/DSoZSaK9oCuxTVQHvhN+mJuO+ Mu94gmX6BQ+GjGQAxbTwENrxa//pneJCQpBKkXJXjBMpuvFUvnthG34KZMXVqsdt kVuc9QwFULs/BPnT0RC88DsKL/WxLmUSLDjfEzD1nQSVyDeQYd71wHjETkGow/1c bgaBra/+Gsj1e+2Lbj1HzMfeul4/QP0hV44ZXqq1ujM8vt9lcNYbS6iPJp2pdZLP GeVOsy8jsPGYMGLqoETHAci6RRFdqxZ/GBIU0XhDj7K8UBnFuD+DeiyAzIPnW6jI gIQ5o+W6Gb+K09XbVhKRTkwJ7WMimYk=',
        signatureAlgorithm: 'sha256',
			}
		}
	}
}
