install:
	# Install Node Packages
	@ echo "\n\n$$(tput setaf 6)Installing Node Packages...$$(tput sgr 0)\n\n"
	@ sleep 1
	npm install
	@ echo "\n\n$$(tput setaf 6)...DONE!$$(tput sgr 0)"

	# Install Bower Components
	@ echo "\n\n$$(tput setaf 6)Installing Bower Components...$$(tput sgr 0)\n\n"
	@ sleep 1
	bower install
	@ echo "\n\n$$(tput setaf 6)...DONE!$$(tput sgr 0)"
